import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "./editor.css";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  return (
    <div className="editor-layout">
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      ></textarea>
    </div>
  );
};

export default TextEditor;

// import React, { useState } from "react";
// import "./editor.css";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// const Editor = () => {
//   return (
//     <>
//       <div className="editor-layout" onChange={() => setEditorState(initial)}>
//         Editor
//         <input type="text" value={initial} onChange={handleChange} />
//         <br />
//         <h1>{editorState}</h1>
//       </div>
//     </>
//   );
// };
// const Editor = () => {
//   const [editorState, setEditorState] = useState("");
//   const [initial, setInitial] = useState("");
//   const [editState, setEditState] = useState(EditorState.createEmpty())
//   onEditorStateChange={changeeeditState}
//   const changeeeditState=(e)=>{
//     setEditState(e.target.value)
//   }
//   const handleChange = (e) => {
//     setInitial(e.target.value);
//   };
//   return (
//     <div className="editor-layout" onChange={() => setEditorState(initial)}>
//       Editor
//       <input type="text" value={initial} onChange={handleChange} />
//       <br />
//       <h1>{editorState}</h1>
//     </div>
//   );
// };

// export default Editor;
