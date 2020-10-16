import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    'ID1': {
      name: "Go to Shop",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "18:30"
    },
    'ID2': {
      name: "Eat Lunch",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "14:30"
    },
    'ID3': {
      name: "Brush Teeth",
      completed: true,
      dueDate: "2019/05/13",
      dueTime: "16:30"
    },
    'ID4': {
      name: "Go to Shop",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "18:30"
    },
    'ID5': {
      name: "Eat Lunch",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "14:30"
    },
    'ID6': {
      name: "Brush Teeth",
      completed: true,
      dueDate: "2019/05/13",
      dueTime: "16:30"
    },
    'ID7': {
      name: "Go to Shop",
      completed: false,
      dueDate: "2019/05/14",
      dueTime: "18:30"
    },
    'ID8': {
      name: "Eat Lunch",
      completed: false,
      dueDate: "2019/05/12",
      dueTime: "14:30"
    },
    'ID9': {
      name: "Brush Teeth",
      completed: true,
      dueDate: "2019/05/13",
      dueTime: "16:30"
    },
  },
  search: '',
  sort: 'dueDate'
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  }
}

const getters = {
  tasksSorted: (state) => {
    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a,b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()

      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

    keysOrdered.forEach((key) => {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted,
      tasksFiltered = {}
    if (state.search) {
      Object.keys(tasksSorted).forEach(function(key) {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase(),
          searchLowerCase = state.search.toLowerCase()
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return tasksSorted
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
      Object.keys(tasksFiltered).forEach(function(key) {
        let task = tasksFiltered[key]
        if (!task.completed) {
          tasks[key] = task
        }
      })  
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
      Object.keys(tasksFiltered).forEach(function(key) {
        let task = tasksFiltered[key]
        if (task.completed) {
          tasks[key] = task
        }
      })
    return tasks
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}