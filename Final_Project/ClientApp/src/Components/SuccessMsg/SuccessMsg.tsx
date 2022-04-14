import './successMsg.css';

const SuccessMsg = (props: any) => {
  return (
      <div className='successMsg'>
          <div className='success-container'>
              <h3 className='success-message'>{props.message}</h3>
          </div>
      </div>
  )
}


export default SuccessMsg;