import { CalendarEventType } from '../../types'

import { returnDayDate } from './helpers'

const currentDate = new Date()

export const mockEvents: CalendarEventType[] = [
  // MONDAY
  {
    id: '312de45c-62cb-4da8-ad9e-c973090d7e3c',
    title: 'Event1',
    start: returnDayDate(currentDate, 1) + 'T07:00:00',
    end: returnDayDate(currentDate, 1) + 'T14:00:00',
    overlapping: 3,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: 'c0e982c0-c152-4930-8aae-b2a9b334052b',
    title: 'Event2',
    start: returnDayDate(currentDate, 1) + 'T08:00:00',
    end: returnDayDate(currentDate, 1) + 'T09:00:00',
    overlapping: 4,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: '29af7782-5383-4a05-8d7a-ec402d6c9e47',
    title: 'Event3',
    start: returnDayDate(currentDate, 1) + 'T15:00:00',
    end: returnDayDate(currentDate, 1) + 'T20:00:00',
    overlapping: 1,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },

  // TUESDAY
  {
    id: 'f3597ec3-9219-43a2-9694-f06e0630c8ed',
    title: 'Event4',
    start: returnDayDate(currentDate, 2) + 'T07:00:00',
    end: returnDayDate(currentDate, 2) + 'T22:00:00',
    overlapping: 0,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.3,
  },

  // WEDNESDAY
  {
    id: '3db62b4c-ab38-43bd-a69e-e8884ae48bbc',
    title: 'Event5',
    start: returnDayDate(currentDate, 3) + 'T17:00:00',
    end: returnDayDate(currentDate, 3) + 'T18:00:00',
    overlapping: 2,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: '81cac69e-9da8-43b1-8765-9cec7aceafbc',
    title: 'Event6',
    start: returnDayDate(currentDate, 3) + 'T18:00:00',
    end: returnDayDate(currentDate, 3) + 'T19:00:00',
    overlapping: 2,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },

  // THURSDAY
  {
    id: '1cc3bbcd-aff8-475b-9f46-6ce91681c2dc',
    title: 'Event7',
    start: returnDayDate(currentDate, 4) + 'T21:00:00',
    end: returnDayDate(currentDate, 4) + 'T22:00:00',
    overlapping: 1,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: '80b66527-8b45-4765-9ae1-88d21e3444ab',
    title: 'Event8',
    start: returnDayDate(currentDate, 4) + 'T21:00:00',
    end: returnDayDate(currentDate, 4) + 'T22:00:00',
    overlapping: 2,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: 'f51ba7a4-da9a-44ce-ba07-a0ed1ebb51b7',
    title: 'Event9',
    start: returnDayDate(currentDate, 4) + 'T16:30:00',
    end: returnDayDate(currentDate, 4) + 'T22:00:00',
    overlapping: 0,
    color: '#C0CA33',
    textColor: '#1F1F1F',
    opacity: 0.3,
  },
  {
    id: 'f51ba7a4-da9a-44ce-ba07-ahdfghb51b7',
    title: 'Event22',
    start: returnDayDate(currentDate, 4) + 'T12:30:00',
    end: returnDayDate(currentDate, 4) + 'T22:00:00',
    overlapping: 0,
    color: '#C0CA33',
    textColor: '#1F1F1F',
    opacity: 0.3,
  },
  {
    id: '070d0f2f-917aa4-4f54-8c2a-3e20efb9a0a9',
    title: 'Event12',
    start: returnDayDate(currentDate, 4) + 'T11:00:00',
    end: returnDayDate(currentDate, 4) + 'T15:45:00',
    overlapping: 2,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  // FRIDAY
  {
    id: '9440385f-eedf-42af-8776-12fbcf9a2d1f',
    title: 'Event10',
    start: returnDayDate(currentDate, 5) + 'T07:00:00',
    end: returnDayDate(currentDate, 5) + 'T16:15:00',
    overlapping: 3,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },
  {
    id: '070d0f2f-9174-4f54-8c2a-3e20efb9a0a9',
    title: 'Event11',
    start: returnDayDate(currentDate, 5) + 'T10:00:00',
    end: returnDayDate(currentDate, 5) + 'T15:45:00',
    overlapping: 2,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.8,
  },

  // SATURDAY
  {
    id: '08de6b94-de55-4618-a118-bcc0e5930c84',
    title: 'Event12',
    start: returnDayDate(currentDate, 6) + 'T07:00:00',
    end: returnDayDate(currentDate, 6) + 'T16:00:00',
    overlapping: 0,
    color: '#C0CA33',
    textColor: '#1F1F1F',
    opacity: 0.3,
  },

  // SUNDAY
  {
    id: '98f6c30c-a95e-4794-b2ee-5c0143cbe0b5',
    title: 'Event13',
    start: returnDayDate(currentDate, 7) + 'T07:00:00',
    end: returnDayDate(currentDate, 7) + 'T22:00:00',
    overlapping: 0,
    color: '#F4511E',
    textColor: '#FFFFFF',
    opacity: 0.3,
  },
]
