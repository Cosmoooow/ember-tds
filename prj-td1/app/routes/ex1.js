import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note=EmberObject.extend({
  content: 'Aucun',
  MAX: 100,
  info: '"',
  size: computed('content', function () {
    return this.MAX - this.content.length;
  }),
  style: computed('size',function(){
  let style='info';
  if(this.size<20){
    return 'danger';
  } else if (this.size<50) {
    return 'warning';
  }
  return 'info'
  })
})


export default Route.extend({
  model(){
    return Note.create();
  }
});
