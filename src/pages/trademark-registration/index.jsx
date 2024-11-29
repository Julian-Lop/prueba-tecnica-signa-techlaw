import React, { useEffect } from 'react'

// * Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllTrademarkRegistrations } from '@/features/trademarkRegistration/asyncThunks'

// * Components
import { DashboardTemplate } from '@/components/templates/DashboardTemplate'

export default function Index() {
  const dispatch = useDispatch()
  const { data, status } = useSelector(state => state.trademarkRegistration)

  useEffect(() => {
    dispatch(getAllTrademarkRegistrations())
    // eslint-disable-next-line
  }, [])

  return (
    <main>
      <DashboardTemplate data={data} />
    </main>
  )
}
