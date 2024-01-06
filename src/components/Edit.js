import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { saveEditedBook } from "../store/actions/book";

const Edit = () => {
    let selectedBookForEdit = useSelector(st => st.selectedBookForEdit);
    let disp = useDispatch();
    let { register, handleSubmit } = useForm({
        defaultValues: selectedBookForEdit
    });
    const save = (data) => {
        alert(JSON.stringify(data))
        disp(saveEditedBook(data))
    }
    return (<form onSubmit={handleSubmit(save)} style={{ display: "flex", flexDirection: "column", backgroundColor: "gray", direction: "rtl" }}>

        <label>שם</label>
        <input {...register("name")} />
        <label>מחיר</label>
        <input {...register("price")} />
        <label>תמונה</label>
        <input {...register("image")} />
        <label>מחבר</label>
        <input {...register("writer")} />
        <input type="submit" />

    </form>);
}

export default Edit;