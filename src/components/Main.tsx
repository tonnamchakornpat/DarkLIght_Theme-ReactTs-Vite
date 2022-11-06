import ThemeSwitcher from "../ThemeSwitcher";

const Main = () => {
  return (
    <div className="max-w-md h-auto bg-slate-300  dark:bg-slate-800 rounded-lg shadow-md p-2" >
      <div className="flex justify-center items-center ">
        <ThemeSwitcher />
      </div>
      <p className="p-3 dark:text-gray-300">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        tempore nobis officiis velit doloremque, beatae temporibus, quidem
        inventore ducimus placeat, repellat quas consequuntur ratione odit nulla
        modi fugit! Impedit, laborum voluptates! Deleniti ratione laboriosam,
        adipisci dolore sunt labore, harum itaque minus dicta deserunt aliquid
        provident, soluta excepturi quaerat.
      </p>
    </div>
  );
};

export default Main;
