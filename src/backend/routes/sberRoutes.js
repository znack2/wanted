import homeController       from '../controllers/homeController'
import helperInit           from '../helpers/routesHelper'

function initRoutes(app,passport) {

  const helper = helperInit(app,passport)

  // auth routes
  initAuthRoutes(helper)
  //get api routes
  initProjectRoutes(helper)
  initProjectsIdeasRoutes(helper)
  initProjectsQuestionsRoutes(helper)
  initNotificationRoutes(helper)
  initCommunitiesRoutes(helper)
  initSurveysRoutes(helper)
  //all other routes are rendered as home (for client side routing)
  // helper.get('*', homeController.home, {view: true})
}

/**
 * Auth Routes
 */
function initAuthRoutes(helper) {
  helper.post('/api/attachments', homeController.test_get)
  helper.post('/api/sign_in', homeController.test_get)
  helper.get('/api/dictionaries', homeController.test_get)
  helper.get('/api/dictionaries/:id', homeController.test_get)
  helper.get('/api/dictionaries/:id/items', homeController.test_get)
  helper.get('/api/registration_types', homeController.test_get)
  helper.post('/api/sign_up', homeController.test_get)
  helper.get('/api/rules_and_license', homeController.test_get)
  helper.post('/api/recover_password', homeController.test_get)
  helper.post('/api/confirmation_request', homeController.test_get)
  helper.get('/api/profile_fields', homeController.test_get)
  helper.get('/api/profile', homeController.test_get)
  helper.get('/api/profile/:id', homeController.test_get)
  helper.post('/api/profile/:user_id/thanks', homeController.test_get)
  helper.get('/api/activity', homeController.test_get)
  helper.get('/api/communities/:id/activity', homeController.test_get)
  helper.get('/api/projects/:id/activity', homeController.test_get)
  helper.get('/api/hall_of_fame', homeController.test_get)
  helper.get('/api/hall_of_fame_badges', homeController.test_get)
  helper.get('/api/hall_of_fame_nominations', homeController.test_get)
  helper.get('/api/dashboard', homeController.test_get)
  helper.post('/api/projects/:id/access', homeController.test_get)
}
/**
 * Api Routes
 */

function initProjectRoutes(helper) {
  helper.get('/api/projects', homeController.test_get)
  helper.get('/api/projects/:project_id', homeController.test_get)
  helper.post('/api/projects/:project_id/access', homeController.test_get)
  helper.get('/api/projects/:project_id/news', homeController.test_get)
  helper.get('/api/projects/:project_id/news/:id/comments', homeController.test_get)
  helper.post('/api/projects/:project_id/news/:id/like', homeController.test_get)
  helper.post('/api/projects/:project_id/news/:news_id/like', homeController.test_get)
  helper.post('/api/projects/:project_id/news/:id/comments', homeController.test_get)
  helper.get('/api/projects/:project_id/statistics/user_ratings', homeController.test_get)

  helper.get('/api/projects/:project_id/profile', homeController.test_get)
  helper.get('/api/projects/:project_id/profile/ideas', homeController.test_get)
  helper.get('/api/projects/:project_id/profile/questions', homeController.test_get)
  helper.get('/api/projects/:project_id/profile/comments', homeController.test_get)
  helper.get('/api/projects/:project_id/profiles/:user_id', homeController.test_get)
  helper.get('/api/projects/:project_id/profiles/:user_id/ideas', homeController.test_get)
  helper.get('/api/projects/:project_id/profiles/:id/questions', homeController.test_get)
  helper.get('/api/projects/:project_id/profiles/:user_id/comments', homeController.test_get)
}
function initProjectsIdeasRoutes(helper) {
  helper.get('/api/projects/:project_id/ideas', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas', homeController.test_get)
  helper.put('/api/projects/:project_id/ideas/:idea_id', homeController.test_get)
  helper.delete('/api/projects/:project_id/ideas/:idea_id', homeController.test_get)
  helper.get('/api/projects/:project_id/ideas/:idea_id/expert_reports', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas/:idea_id/change_status', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas/:idea_id/like', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas/:idea_id/like', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas/:idea_id/resource_vote', homeController.test_get)
  helper.post('/api/projects/:id/similar_ideas', homeController.test_get)
  helper.get('/api/projects/:project_id/ideas/:idea_id/comments', homeController.test_get)
  helper.post('/api/projects/:project_id/ideas/:idea_id/comments', homeController.test_get)
  helper.put('/api/projects/:project_id/ideas/:idea_id/comments/:comment_id', homeController.test_get)
  helper.put('/api/projects/:project_id/ideas/:idea_id/:comment_id/like', homeController.test_get)
  helper.delete('/api/projects/:project_id/ideas/:idea_id/comments/:comment_id', homeController.test_get)
  helper.delete('/api/projects/:project_id/ideas/:idea_id/comments/:comment_id', homeController.test_get)
}
function initProjectsQuestionsRoutes(helper) {
  helper.get('/api/projects/:project_id/questions', homeController.test_get)
  helper.post('/api/projects/:project_id/questions', homeController.test_get)
  helper.post('/api/projects/:project_id/similar_questions', homeController.test_get)
  helper.put('/api/projects/:project_id/questions/:question_id', homeController.test_get)
  helper.delete('/api/projects/:project_id/questions/:question_id', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/subscribe', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/unsubscribe', homeController.test_get)
  helper.get('/api/projects/:project_id/questions/:question_id/answers', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/answers', homeController.test_get)
  helper.put('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.delete('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.get('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.put('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.post('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.delete('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
  helper.delete('/api/projects/:project_id/questions/:question_id/answers/', homeController.test_get)
}
function initSurveysRoutes(helper) {
  helper.get('/api/news', homeController.test_get)
  helper.get('/api/surveys', homeController.test_get)
  helper.get('/api/surveys/:id', homeController.test_get)
  helper.post('/api/surveys/:id', homeController.test_get)
}
function initNotificationRoutes(helper) {
  helper.get('/api/notifications', homeController.test_get)
  helper.post('/api/notifications/:id/mark_as_read', homeController.test_get)
  helper.post('/api/notifications/:id/mark_as_unread', homeController.test_get)
  helper.post('/api/notifications/mark_all_as_read', homeController.test_get)
  helper.get('/api/notifications/settings', homeController.test_get)
  helper.put('/api/notifications/settings', homeController.test_get)

  // helper.get('/send/basic', function (req, res) {
  //   var token = req.query.token
  //   console.log('token = ' + token)
  //   sendPush(token, res)
  // })
  //
  // helper.post('/users/:user_id/set_token', requireJwt, TodosController.checkValidUser, TodosController.setToken]);
  // helper.get('/users/:user_id/send_notification', TodosController.sendNotification]);
}
function initCommunitiesRoutes(helper) {
  helper.get('/api/communities', homeController.test_get)
  helper.get('/api/communities/:id', homeController.test_get)
  helper.get('/api/communities/:id/projects', homeController.test_get)
  helper.get('/api/communities/:id/news', homeController.test_get)
  helper.get('/api/communities/:community_id/news/:news_id/comments', homeController.test_get)
  helper.post('/api/communities/:community_id/news/:news_id/like', homeController.test_get)
  helper.delete('/api/communities/:community_id/news/:news_id/like', homeController.test_get)
  helper.post('/api/communities/:community_id/news/:news_id/comments', homeController.test_get)
  helper.get('/api/community/:id/surveys', homeController.test_get)
  helper.get('/api/communities/:id/surveys/:id', homeController.test_get)
  helper.post('/api/communities/:id/surveys/:id', homeController.test_get)
}

export default {
  initRoutes
}