import React from "react";
import "./editor.css";
import User from "../Navbar/SideBar";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
const TextEditor = () => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default TextEditor;
