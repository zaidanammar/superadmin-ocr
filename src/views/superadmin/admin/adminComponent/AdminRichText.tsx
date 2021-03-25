import { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css';

export default function AdminRichText() {
    const placeholder = 'Ketik pesan';
    const { quill, quillRef } = useQuill({ placeholder });
    const [message, setMessage] = useState<any>([])

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, source) => {
                //    setMessage(delta.ops)
                // console.log(delta.ops)
                // if (delta.ops?.[0].insert) {
                //     console.log(delta.ops?.[0].insert)
                //     setMessage(delta.ops?.[0].insert)
                // } else {
                //     console.log(delta.ops?.[1].insert)
                //     setMessage(delta.ops?.[1].insert)
                // }
                // console.log(source)
            });
        }
    }, [quill]);

    console.log(message, '<<<anjir<<<')
    return (
        <>
            <div className="flex p-4 mt-3 mb-6 rounded border border-abuabu">
                <h1 className="text-sm mr-7 ml-1">Untuk</h1>
                <h1 className="text-sm">Super Admin</h1>
            </div>
            <div className="w-full h-48 mb-20 bg-white">
                <div ref={quillRef} />
            </div>

            <button className=" bg-biru rounded py-1 px-7 font-medium text-white text-base w-64">
                <h1>Kirim</h1>
            </button>
        </>
    );
}