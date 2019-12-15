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
  }
}
