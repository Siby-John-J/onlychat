
function Input(prop: any) {
    const { 
        id, sendMessage, setText, text
     } = prop.prop

  return (
    <div className="chat-input">
    <input
        className="real_input"
        type="text"
        placeholder="Type Somethink..."
        onKeyDown={(e) => {
            if (
                e.key === "Enter" &&
                text !== ""
            ) {
                sendMessage(text, id);
                e.currentTarget.value = "";
            }
        }}
        onChange={(e) =>
            setText(e.target.value)
        }
    />
    <button
        onClick={() => {
            if (text !== "") {
                sendMessage(text, id);
                _input.value = "";
            }
        }}
    >
        Send
    </button>
</div>
  )
}

export default Input