import { useEffect, useState } from "react"

function Polls(props) {


    return (
        <>
            <button onClick={() => {

                props.setCount(pre =>
                    ({ ...pre, [props.item]: pre[props.item] + 1 })
                )
            }}>{props.item} vote</button>
        </>
    )
}

export default Polls
