import React from 'react'

// * Router
import { useRouter } from 'next/router'

// * Redux
import { useDispatch } from 'react-redux'
import { createTrademarkRegistration } from '@/features/trademarkRegistration/asyncThunks'

// * Components
import { Layout } from '../organims/Layout'
import { BrandForm } from '../organims/BrandForm'


export const FormTemplate = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const submit = (data) => {
    dispatch(createTrademarkRegistration(data))
    router.push('/trademark-registration/')
  }

  return (
    <Layout title='Servicios/Registro de Marca'>
      <BrandForm onClose={submit} />
    </Layout>
  )
}
