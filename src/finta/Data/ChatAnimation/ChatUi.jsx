

const ChatUi = ({text,className=''}) => {
  return (
    <div

    className={`shadow-finta border border-neutral-100 rounded-t-xl text-[15px] text-neutral-800 w-fit max-w-55 bg-neutral-50 dark:bg-neutral-500 ${className}`}>
      {text}
    </div>
  )
}

export default ChatUi