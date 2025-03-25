import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

function Appointment() {
  const { docId } = useParams()
  const { doctors,currencySymbol}= useContext(AppContext)
  const [docInfo, setDocInfo] = useState(false)

  const navigate = useNavigate()

//  date displaylogic-------------------------------------------------------------------------------------

  const today= new Date()

  const dateArraySevendays=[]

  for(let i=0;i<7;i++)
  {
    const nextDate= new Date()
    nextDate.setDate(today.getDate()+i)
    let nextDateStringArray= nextDate.toString().split(' ')
    
     dateArraySevendays.push([nextDateStringArray[0], nextDateStringArray[2]])
  }
  console.log(dateArraySevendays)
  //---------------------------------------------------------------------------------------------------------------------------



  const slotsArray= [[10,0],[10,30],[11,0],[11,30],[12,0], [16,0],[16,30],[17,0],[17,30],[18,0]]
  let hour= today.getHours()
  let minutes= today.minutes()
  const remainingSlotArray=[]
 

 for(let j=0;j<7;j++)
 {
  const todayDateforSlot= new Date()
  if(today.getDate()===todayDateforSlot.getDate())
  {
    for(let i=0 ;i<slotsArray.length;i++)
      {
        if(hour=== slotsArray[i][0] )
        {
          if(minutes<30)
           remainingSlotArray.push(slotsArray[i])
        }
       if(hour>slotsArray[i][0])
       {
         remainingSlotArray.push(slotsArray[i])
       }
      }
  }
  else remainingSlotArray[j]=slotsArray
 }
 console.log(remainingSlotArray)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId)
    setDocInfo(docInfo)
}

useEffect(()=>{
  fetchDocInfo()
  
},[docInfo])

    


  return (
    <div>
       {/* ---------- Doctor Details ----------- */}
       {/* On sm screens (≥ 640px) → flex-row (laid out horizontally) */}
       <div className='flex  flex-col   p-8 py-7 sm:flex-row gap-4'>
                <div>
                    <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
                </div>

                <div className='flex-1  p-8 py-7 bg-white mx-2 sm:mx-0 mt-[0px] sm:mt-0'>

                    {/* ----- Doc Info : name, degree, experience ----- */}

                    <p className='flex items-center gap-2 sm:text-3xl font-medium text-gray-700'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
                    <div className='flex items-center gap-2 mt-1 text-gray-600'>
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
                    </div>

                    {/* ----- Doc About ----- */}
                    <div>
                        <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
                        <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
                    </div>

                    <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span> </p>
                </div>
            </div>

           <div className='flex gap-5'>
            {dateArraySevendays.map((array)=>(
              <div className='flex flex-col border'>
              <div>{array[0]}</div>
              <div> {array[1]}</div>
            </div>
            ))}
           </div>

    </div>
  )
}

export default Appointment