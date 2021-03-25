import { useQuill } from 'react-quilljs'
import 'quill/dist/quill.snow.css';

export default function RequestRevisiText() {
    const placeholder = 'Ketik pesan';
    const { quillRef } = useQuill({ placeholder });

    return (
        <>
            <div style={{ width: '100%', height: 296, marginBottom: '6%' }}>
                <div ref={quillRef} />
            </div>

            <button className=" bg-biru rounded py-1 px-7 font-medium text-white text-base w-64">
                <h1>Kirim</h1>
            </button>
        </>
    );
}