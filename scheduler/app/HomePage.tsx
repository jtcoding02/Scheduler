"use client"; 
import React, {Component, useState} from 'react';
import './globals.css';
import './Styling/style.css';
import TopNavBar from './Components/TopNavBar';
import MenuBar from './Components/MenuBar';
import Calendar from './Components/Calendar';
import CreateNewEvent from './Components/CreateNewEvent';
import ViewEventDetail from './Components/ViewEventDetail';
import EditEventDetail from './Components/EditEventDetail';
import DeleteEvent from './Components/DeleteEvent';
import mockEventData from './Data/MockEventData';

function HomePage(){
    // Shared events state
    const [events, setEvents] = useState(mockEventData);
    // Controls modal overlay visibility
    const [showCreateModal, setShowCreateModal] = useState(false);

    // Tracks active situational overlays
    const [activeModal, setActiveModal] = useState<{
        mode: 'view' | 'edit' | 'delete' | null;
        event: any | null;
    }>({ mode: null, event: null });

    const handleAddEvent = (newEvent: any) => {
        setEvents((prev) => [...prev, newEvent]);
        setShowCreateModal(false); // Close modal on success
    };

    const handleUpdateEvent = (updatedEvent: any) => {
        setEvents((prev) => prev.map(e => e.id === updatedEvent.id ? updatedEvent : e));
        setActiveModal({ mode: null, event: null }); // close
    };

    const handleDeleteEvent = (id: number) => {
        setEvents((prev) => prev.filter(e => e.id !== id));
        setActiveModal({ mode: null, event: null }); // close
    };

    return (
        /* Later remove overflow-hidden */
        <div className="homepage-div h-screen w-full bg-white flex flex-col overflow-auto">
            <div className = "topnavbar-div w-full flex-shrink-0">
                <TopNavBar />
            </div>

            <div className="calendar-div flex-1 w-full min-h-0 flex flex-row">
                <Calendar 
                    events={events} 
                    onCreateClick={() => setShowCreateModal(true)}
                    onEventAction={(mode, event) => setActiveModal({ mode, event })}
                />
            </div>
            
            
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                        <CreateNewEvent events={events} onClose={() => setShowCreateModal(false)} onSave={handleAddEvent} />
                    </div>
                </div>
            )}

            {/* ACTION ROUTER OVERLAY PANEL */}
            {activeModal.mode && activeModal.event && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex justify-center items-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                        {activeModal.mode === 'view' && (
                            <ViewEventDetail 
                                event={activeModal.event} 
                                onClose={() => setActiveModal({ mode: null, event: null })}
                                onEditClick={() => setActiveModal({ mode: 'edit', event: activeModal.event })}
                                onDeleteClick={() => setActiveModal({ mode: 'delete', event: activeModal.event })}
                            />
                        )}
                        {activeModal.mode === 'edit' && (
                            <EditEventDetail 
                                event={activeModal.event} 
                                onClose={() => setActiveModal({ mode: null, event: null })}
                                onUpdate={handleUpdateEvent}
                            />
                        )}
                        {activeModal.mode === 'delete' && (
                            <DeleteEvent 
                                eventId={activeModal.event.id} 
                                eventTitle={activeModal.event.title} 
                                onClose={() => setActiveModal({ mode: null, event: null })}
                                onConfirmDelete={handleDeleteEvent}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;