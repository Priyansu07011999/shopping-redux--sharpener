const Notification = (props) => {
    let specialClasses = '';
  
    if (props.status === 'error') {
      specialClasses = 'bg-red-700';
    }
    if (props.status === 'success') {
      specialClasses = 'bg-green-500';
    }
  
    return (
      <section className={`w-full h-12 flex justify-between items-center px-10 ${specialClasses} text-white`}>
        <h2 className="text-lg font-semibold">{props.title}</h2>
        <p>{props.message}</p>
      </section>
    );
  };
  
  export default Notification;
  