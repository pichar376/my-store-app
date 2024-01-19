const NotificationProducts = ({ counter }) => {
  return (
    <div className="w-1 h-1 rounded-full bg-red-700  flex justify-center ">
      <p className="text-xs font-medium text-slate-300">{counter.length}</p>
    </div>
  );
};

export default NotificationProducts;
