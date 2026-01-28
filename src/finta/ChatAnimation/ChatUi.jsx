

const ChatUi = ({text,className=''}) => {
  return (
    <div

    className={`shadow-finta rounded-t-md rounded-bl-md rounded-br-sm p-1 text-sec w-fit px-2 py-2 max-w-60 bg-neutral-100 ${className}`}>
      {text}
    </div>
  )
}

export default ChatUi