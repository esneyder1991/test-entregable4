import React from "react";

const Modal = ({
  isShowForm,
  setIsShowForm,
  register,
  handleSubmit,
  submit,
  reset,
  setIsUserIdToEdit,
  isUserIdToEdit,
}) => {
  const handleClickCloseModal = () => {
    setIsShowForm((isShowForm) => !isShowForm);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
    });
    setIsUserIdToEdit();
  };

  return (
    <section
      className={`fixed top-0 left-0 bottom-0 right-0 bg-black/80 flex justify-center items-center transition-opacity ${
        isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="relative bg-white p-4 grid gap-4 w-[300px]"
      >
        <h3 className="text-2xl font-bold">
          {isUserIdToEdit ? "Editar usuario" : "Crear usuario"}
        </h3>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="first_name">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1 text-2xl"
            id="first_name"
            type="text"
            required
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="last_name">
            Apellidos <span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="last_name"
            type="text"
            required
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="email">
            Correo <span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1 "
            id="email"
            type="email"
            required
            {...register("email")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="password">
            Contraseña <span className="text-red-500">*</span>
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="password"
            type="password"
            required
            {...register("password")}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-xs font-semibold" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="border-[1px] rounded-sm bg-gray-100 p-1"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>

        <i
          onClick={handleClickCloseModal}
          className="bx bx-x absolute right-2 top-2 text-2xl hover:text-red-500 cursor-pointer"
        ></i>
        <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm">
        {isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
