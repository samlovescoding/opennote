const Editor = ({ value, onChange, id }: EditorProps) => {
    return <div id={id} />;
};

interface EditorProps {
    value: any;
    onChange: Function;
    id: string;
}

export default Editor;
