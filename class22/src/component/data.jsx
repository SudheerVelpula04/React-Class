import { ToastContainer, toast,Bounce } from "react-toastify";

function Data() {
  const handleClick = () => {
    // alert('hello Clicked')
    // toast.success("Welcome to React Toasty");
    // toast.warning("warning");
    toast.info("welcome to new process", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <>
      <button className="text-3xl font-bold underline " onClick={handleClick}>Click</button>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        
      />
    </>
  );
}
export default Data;
