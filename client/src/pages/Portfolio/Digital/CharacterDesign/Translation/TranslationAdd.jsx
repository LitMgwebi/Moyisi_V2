import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function TranslationAdd({ id }) {
    const [process, setProcess] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState(null);
    const [showButton, setShowButton] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();

        formData.append("description", description);
        for (let i = 0; i < process.length; i++) {
            formData.append("process", process[i]);
        }
        formData.append("characterDesign", id)

        axios({
            method: "POST",
            url: "http://localhost:1500/translation/add",
            data: formData,
            headers: {
                'accept': 'application/json',
                'Content-Type': `multipart/form-data`,
            },
        }).then((res) => {
            setError(null);
            setStatus(res.data.message)
            setDescription("");
            setProcess("");
            setShowButton(true)
        }).catch((error) => {
            console.error(error.response.data.error);
            setError(error.response.data.error);
        });
    }
    return (
        <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="controls">
                <p>{status}</p>
                {error && <div className="error">{error}</div>}
                <h1>Create</h1>
                <div className="button-group">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    {showButton && <Link to="/portfolio/character-design"><button>Finish</button></Link>}
                </div>
            </div>
            <div className="formInput">
                <div className="multilineInput">
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="photoInput">
                    <label>Process:</label>
                    <input
                        type="file"
                        name="process"
                        accept="image/*"
                        onChange={(e) => { setProcess(e.target.files) }}
                        required
                        multiple
                    />
                </div>
            </div>
        </form>
    )
}

export default TranslationAdd;