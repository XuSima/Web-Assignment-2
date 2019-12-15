import Api from '@/services/api'

export default {
  fetchStudents () {
    return Api().get('/students')
  },
  postStudent (student) {
    return Api().post('/students', student,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteStudent (id) {
    return Api().put(`/students/${id}/votes`)
  },
  deleteStudent (id) {
    return Api().delete(`/students/${id}`)
  },
  fetchStudent (id) {
    return Api().get(`/students/${id}`)
  },
  editStudent (id, student) {
    return Api().post(`/students/edit/${id}`, student,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchTeachers () {
    return Api().get('/teachers')
  },
  postTeacher (teacher) {
    return Api().post('/teachers', teacher,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteTeacher (id) {
    return Api().put(`/teachers/${id}/votes`)
  },
  deleteTeacher (id) {
    return Api().delete(`/teachers/${id}`)
  },
  fetchTeacher (id) {
    return Api().get(`/teachers/${id}`)
  },
  editTeacher (id, teacher) {
    return Api().post(`/teachers/edit/${id}`, teacher,
      { headers: {'Content-type': 'application/json'} })
  }
}
