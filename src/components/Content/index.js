import { memo } from 'react';

function Content(
    // { count }
    {onIncrease}
) {
    console.log('re-render');
    return (
        <>
            <h1>Memo Example
                {/* {count} */}
            </h1>
            <button onClick={onIncrease}>Click!</button>
        </>
    )
}

export default memo(Content);