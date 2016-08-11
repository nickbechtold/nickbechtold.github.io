angular.
  module('projectList').
  component('projectList', {
    templateUrl: 'project-list.template.html',
    controller: function ProjectListController() {
      this.projects = [
        {
          title: 'Lancity Connect',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          title: 'Greenfield Puppies',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          title: 'AMHCO',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
