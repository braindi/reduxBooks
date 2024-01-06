import { useForm, reset } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/actions/book";

const NewBook = () => {
    const { reset, handleSubmit, register } = useForm();
    let disp = useDispatch();
    const add = (data) => {
        alert(JSON.stringify(data))
        disp(addBook(data))
        reset();
    }
    return (
        <form onSubmit={handleSubmit(add)} style={{ display: "flex", flexDirection: "column", backgroundColor: "pink", direction: "rtl" }}>
            <label>שם</label>
            <input {...register("name")} />
            <label>מחיר</label>
            <input {...register("price")} />
            <label>תמונה</label>
            <input {...register("image")} />
            <label>מחבר</label>
            <input {...register("writer")} />
            <label>קוד</label>
            <input {...register("id")}/>
            <input type="submit" />
        </form>
    )
}

export default NewBook;