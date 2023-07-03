const EventWrapper = ({ children }) => {
  const eventCount = children.filter((child) => child).length;
  const dotColor = eventCount > 1 ? "blue" : "red";
  const events = children.filter((child) => child);

  const handleDotClick = (e) => {
    e.stopPropagation();
    setShowPortal(true);
    setPortalData(events);
    setHighlightedDate(null);
  };

  return (
    <>
      {eventCount > 0 && (
        <div
          className="dot"
          style={{
            backgroundColor: dotColor,
          }}
          onClick={handleDotClick}
        ></div>
      )}
    </>
  );
};
