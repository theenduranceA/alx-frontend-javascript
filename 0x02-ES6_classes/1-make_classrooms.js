import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const Classroomsizes = [19, 20, 34];
  const Classrooms = Classroomsizes.map((size) => new ClassRoom(size));
  return Classrooms;
}
