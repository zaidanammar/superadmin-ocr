import { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css';
import { useHistory } from "react-router-dom";

export default function PicText() {
    const history = useHistory()
    const placeholder = 'Ketik pesan';
    const { quill, quillRef } = useQuill({ placeholder });
    const [message, setMessage] = useState<any>([])

    // useEffect(() => {
    //     if (quill) {
    //         quill.on('text-change', (delta, source) => {
    //             //    setMessage(delta.ops)
    //             // console.log(delta.ops)
    //             if (delta.ops?.[0].insert) {
    //                 console.log(delta.ops?.[0].insert)
    //                 setMessage(delta.ops?.[0].insert)
    //             } else {
    //                 console.log(delta.ops?.[1].insert)
    //                 setMessage(delta.ops?.[1].insert)
    //             }
    //             console.log(source)
    //         });
    //     }
    // }, [quill]);

    const handleback = () => {
        history.push('/admin/pic')
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-abuabu cursor-pointer" onClick={handleback}>kembali
                </h1>
            </div>
            <div className="flex p-4 my-5 rounded border border-gray-200 bg-white">
                <h1 className="text-sm mr-7 ml-1">Untuk</h1>
                <h1 className="text-sm">Lee chong Wei</h1>
            </div>
            <div className="w-full h-48 mb-20 bg-white">
                <div ref={quillRef} />
            </div>

            <button className=" bg-biru rounded py-1 px-7 font-medium text-white text-base w-64">
                <h1>Kirim</h1>
            </button>
        </>
    )
}

