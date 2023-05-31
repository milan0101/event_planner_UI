import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Page, Eventcalendar, getJson, Toast } from '@mobiscroll/react';

function Bcalender() {
    const [myEvents, setEvents] = React.useState([]);
    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastText, setToastText] = React.useState();
    

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);

    const closeToast = React.useCallback(() => {
        setToastOpen(false);
    }, []); 
    
    const onEventClick = React.useCallback((event) => {
        setToastText(event.event.title);
        setToastOpen(true);
    }, []);

    const view = React.useMemo(() => {
        return {
            calendar: { labels: true }
        };
    }, []);


  return (
    <div><Page>
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            clickToCreate={false}
            dragToCreate={false}
            dragToMove={false}
            dragToResize={false}
            eventDelete={false}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
       />
        <Toast 
    		message={toastText}
    		isOpen={isToastOpen}
            onClose={closeToast}
    	/>
    </Page>
</div>
  )
}

export default Bcalender