import Layout from "components/layout";
import Icon from "components/icon";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";

function CalendarPage() {
    const handleNewEvent = () => alert("Add New Event");
    return (
        <Layout title="Home">
            <div className="card">
                <div className="card-inner">
                    <FullCalendar
                        plugins={[dayGridPlugin, bootstrap5Plugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            start: "title prev,next",
                            center: "",
                            end: "newEvent",
                        }}
                        buttonText={{
                            today: "Today",
                        }}
                        customButtons={{
                            newEvent: {
                                text: "Add Event",
                                click: handleNewEvent,
                                icon: "plus",
                                // themeIcon: "plus",
                            },
                        }}
                        themeSystem="bootstrap5"
                    />
                </div>
            </div>
        </Layout>
    );
}

export default CalendarPage;
