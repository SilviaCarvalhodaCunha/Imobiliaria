import { Request, Response } from "express"
import scheduleVisitPropertyServices from "../services/schedules/scheduleVisitProperty.services"
import { TShedulesRequest } from "../interfaces/schedules.interfaces"
import listAllAppointmentsPropertyServices from "../services/schedules/listAllAppointmentsProperty.services"

const scheduleVisitPropertyControllers = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = res.locals.user.id
    const scheduleData: TShedulesRequest = req.body
    const newSchedule: object = await scheduleVisitPropertyServices(scheduleData, userId)
    return res.status(201).json(newSchedule)
}

const listAllAppointmentsPropertyControllers = async (req: Request, res: Response): Promise<Response> => {
    const realEstateId: number = parseInt(req.params.id)
    const schedules = await listAllAppointmentsPropertyServices(realEstateId)
    return res.status(200).json(schedules)
}

export {scheduleVisitPropertyControllers, listAllAppointmentsPropertyControllers}