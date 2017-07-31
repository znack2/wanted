import homeController       from '../controllers/homeController'
import authController       from '../controllers/authController'
import helperInit           from '../helpers/routesHelper'

// TODO: WHY USE IT?
// let helper = helperInit(null, null)

function initRoutes(app,passport) {
  //get routes
  const helper = helperInit(app,passport)

  helper.get('/api/test_get', homeController.test_get)
  helper.get('/api/test_post', homeController.test_post)
  helper.get('/api/test_put', homeController.test_put)

  // auth routes
  initAuthRoutes(passport)

  //get api routes
  initProjectRoutes(helper)
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
function initAuthRoutes(passport) {
  // POST      attachments
  // POST      sign_in
  // GET       dictionaries
  // GET       dictionaries/:id
  // GET       dictionaries/:id/items
  // GET       registration_types
  // POST      sign_up
  // GET       sign_up/rules_and_license
  // POST      recover_password
  // POST      confirmation_request
  // GET       profile_fields
  // GET       profile
  // GET       profiles/:id
  // POST      profiles/:user_id/thanks
  // GET       activity
  // GET       communities/:id/activity
  // GET       projects/:id/activity
  // GET       hall_of_fame
  // GET       hall_of_fame/badges
  // GET       hall_of_fame/nominations
  // GET       dashboard
  // POST      projects/:id/access
}
/**
 * Api Routes
 */

function initProjectRoutes(helper) {
  // GET       projects
  // GET       projects/:project_id
  // POST      projects/:project_id/access
  // GET       projects/:project_id/news
  // GET       projects/:project_id/news/:id/comments
  // POST      projects/:project_id/news/:id/like
  // DELETE    projects/:project_id/news/:news_id/like
  // POST      projects/:project_id/news/:id/comments
  // GET       projects/:project_id/statistics/user_ratings

  // GET       projects/:project_id/profile
  // GET       projects/:project_id/profile/ideas
  // GET       projects/:project_id/profile/questions
  // GET       projects/:project_id/profile/comments
  // GET       projects/:project_id/profiles/:user_id
  // GET       projects/:project_id/profiles/:user_id/ideas
  // GET       projects/:project_id/profiles/:id/questions
  // GET       projects/:project_id/profiles/:user_id/comments
}
function initProjectsIdeasRoutes(helper) {
  // GET       projects/:project_id/ideas
  // POST      projects/:project_id/ideas
  // PUT       projects/:project_id/ideas/:idea_id
  // DELETE    projects/:project_id/ideas/:idea_id
  // GET       projects/:project_id/ideas/:idea_id/expert_reports
  // POST      projects/:project_id/ideas/:idea_id/change_status
  // POST      projects/:project_id/ideas/:idea_id/like
  // POST      projects/:project_id/ideas/:idea_id/like
  // POST      projects/:project_id/ideas/:idea_id/resource_vote
  // POST      projects/:id/similar_ideas
  // GET       projects/:project_id/ideas/:idea_id/comments
  // POST      projects/:project_id/ideas/:idea_id/comments
  // PUT       projects/:project_id/ideas/:idea_id/comments/:commen
  // PUT       projects/:project_id/ideas/:idea_id/:comment_id/like
  // DELETE    projects/:project_id/ideas/:idea_id/comments/:commen
  // DELETE    projects/:project_id/ideas/:idea_id/comments/:commen
}
function initProjectsQuestionsRoutes(helper) {
  // GET       projects/:project_id/questions
  // POST      projects/:project_id/questions
  // POST      projects/:project_id/similar_questions
  // PUT       projects/:project_id/questions/:question_id
  // DELETE    projects/:project_id/questions/:question_id
  // POST      projects/:project_id/questions/:question_id/subscribe
  // POST      projects/:project_id/questions/:question_id/unsubscribe
  // GET       projects/:project_id/questions/:question_id/answers
  // POST      projects/:project_id/questions/:question_id/answers
  // PUT       projects/:project_id/questions/:question_id/answers/
  // DELETE    projects/:project_id/questions/:question_id/answers/
  // POST      projects/:project_id/questions/:question_id/answers/
  // GET       projects/:project_id/questions/:question_id/answers/
  // POST      projects/:project_id/questions/:question_id/answers/
  // PUT       projects/:project_id/questions/:question_id/answers/
  // POST      projects/:project_id/questions/:question_id/answers/
  // DELETE    projects/:project_id/questions/:question_id/answers/
  // DELETE    projects/:project_id/questions/:question_id/answers/
}
function initSurveysRoutes(helper) {
  // GET       news
  // GET       surveys
  // GET       surveys/:id
  // POST      surveys/:id
}
function initNotificationRoutes(helper) {
  // GET       notifications
  // POST      notifications/:id/mark_as_read
  // POST      notifications/:id/mark_as_unread
  // POST      notifications/mark_all_as_read
  // GET       notifications/settings
  // PUT       notifications/settings
  helper.get('/send/basic', function (req, res) {
    var token = req.query.token
    console.log('token = ' + token)
    sendPush(token, res)
  })

  helper.post('/users/:user_id/set_token', requireJwt, TodosController.checkValidUser, TodosController.setToken]);
  helper.get('/users/:user_id/send_notification', TodosController.sendNotification]);
}
function initCommunitiesRoutes(helper) {
  // GET       communities
  // GET       communities/:id
  // GET       communities/:id/projects
  // GET       communities/:id/news
  // GET       communities/:community_id/news/:news_id/comments
  // POST      communities/:community_id/news/:news_id/like
  // DELETE    communities/:community_id/news/:news_id/like
  // POST      communities/:community_id/news/:news_id/comments
  // GET       community/:id/surveys
  // GET       communities/:id/surveys/:id
  // POST      communities/:id/surveys/:id
}

export default {
  initRoutes
}
