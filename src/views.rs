//! Read-only storage views for SorobanCoop.
//!
//! # Usage
//!
//! `get_event_participants` accepts an `event_id`, checks that the event exists,
//! and returns every participant stored under `EventParticipants(event_id)`.
//! New events should be initialized with [`CoopStorage::create_event`], which
//! stores an empty participant list so callers receive `Ok(Vec::new())` until
//! members are added.
//!
//! ```
//! use soroban_coop::views::{get_event_participants, CoopStorage};
//!
//! let mut storage = CoopStorage::default();
//! storage.create_event(7);
//! storage.add_participant(7, "alice.near".to_string()).unwrap();
//!
//! let participants = get_event_participants(&storage, 7).unwrap();
//! assert_eq!(participants, vec!["alice.near".to_string()]);
//! ```

use std::collections::{HashMap, HashSet};

/// Unique identifier for a cooperative event.
pub type EventId = u64;

/// Participant account identifier stored for an event.
pub type Participant = String;

/// Errors returned by read-only event participant views.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ContractError {
    /// The requested event has not been created in storage.
    EventNotFound,
}

/// Storage keys used by SorobanCoop views.
#[derive(Debug, Clone, PartialEq, Eq, Hash)]
pub enum StorageKey {
    /// Participant list keyed by event identifier.
    EventParticipants(EventId),
}

/// Minimal storage abstraction needed by participant view helpers.
pub trait EventParticipantStorage {
    /// Returns `true` when the event exists in contract storage.
    fn event_exists(&self, event_id: EventId) -> bool;

    /// Retrieves the participants stored under `EventParticipants(event_id)`.
    fn get_event_participants_by_key(&self, key: &StorageKey) -> Option<Vec<Participant>>;
}

/// Return all participants for an existing event.
///
/// The function reads the `EventParticipants(event_id)` storage entry and returns
/// the full participant vector. If the event exists but no participants have been
/// added yet, it returns an empty vector. If the event itself has not been
/// created, it returns [`ContractError::EventNotFound`].
pub fn get_event_participants<S>(
    storage: &S,
    event_id: EventId,
) -> Result<Vec<Participant>, ContractError>
where
    S: EventParticipantStorage,
{
    if !storage.event_exists(event_id) {
        return Err(ContractError::EventNotFound);
    }

    let key = StorageKey::EventParticipants(event_id);
    Ok(storage.get_event_participants_by_key(&key).unwrap_or_default())
}

/// In-memory storage used by tests and documentation examples.
#[derive(Debug, Default, Clone)]
pub struct CoopStorage {
    events: HashSet<EventId>,
    participants: HashMap<EventId, Vec<Participant>>,
}

impl CoopStorage {
    /// Creates an event and initializes `EventParticipants(event_id)` to an
    /// empty vector.
    pub fn create_event(&mut self, event_id: EventId) {
        self.events.insert(event_id);
        self.participants.entry(event_id).or_default();
    }

    /// Adds a participant to an existing event.
    pub fn add_participant(
        &mut self,
        event_id: EventId,
        participant: Participant,
    ) -> Result<(), ContractError> {
        if !self.event_exists(event_id) {
            return Err(ContractError::EventNotFound);
        }

        self.participants
            .entry(event_id)
            .or_default()
            .push(participant);
        Ok(())
    }
}

impl EventParticipantStorage for CoopStorage {
    fn event_exists(&self, event_id: EventId) -> bool {
        self.events.contains(&event_id)
    }

    fn get_event_participants_by_key(&self, key: &StorageKey) -> Option<Vec<Participant>> {
        match key {
            StorageKey::EventParticipants(event_id) => self.participants.get(event_id).cloned(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn returns_all_participants() {
        let mut storage = CoopStorage::default();
        storage.create_event(1);
        storage.add_participant(1, "alice".to_string()).unwrap();
        storage.add_participant(1, "bob".to_string()).unwrap();
        storage.add_participant(1, "carol".to_string()).unwrap();

        let participants = get_event_participants(&storage, 1).unwrap();

        assert_eq!(
            participants,
            vec!["alice".to_string(), "bob".to_string(), "carol".to_string()]
        );
    }

    #[test]
    fn empty_list_for_new_event() {
        let mut storage = CoopStorage::default();
        storage.create_event(2);

        let participants = get_event_participants(&storage, 2).unwrap();

        assert!(participants.is_empty());
    }

    #[test]
    fn participants_added_correctly() {
        let mut storage = CoopStorage::default();
        storage.create_event(3);

        assert_eq!(storage.add_participant(3, "dave".to_string()), Ok(()));
        assert_eq!(storage.add_participant(3, "erin".to_string()), Ok(()));

        let participants = get_event_participants(&storage, 3).unwrap();

        assert_eq!(participants.len(), 2);
        assert!(participants.contains(&"dave".to_string()));
        assert!(participants.contains(&"erin".to_string()));
    }

    #[test]
    fn returns_event_not_found_for_missing_event() {
        let storage = CoopStorage::default();

        let result = get_event_participants(&storage, 404);

        assert_eq!(result, Err(ContractError::EventNotFound));
    }
}
