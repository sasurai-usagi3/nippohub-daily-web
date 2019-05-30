import firebase from '~/assets/javascripts/util/firebase.js';
import RandomStringGenerator from '~/assets/javascripts/util/random_string_generator.js';

const alignDigit = x => `0${x}`.slice(-2);
const today = new Date();
const todayStr = `${today.getFullYear()}-${alignDigit(today.getMonth() + 1)}-${alignDigit(today.getDate())}`;

export default {
  props: ['currentUserId', 'dailyReportId'],
  data: function() {
    return {date: '', title: '', content: ''};
  },
  methods: {
    post: function() {
      const database = firebase.database();

      if(this.currentUserId == null) {
        return;
      }

      if(this.dailyReportId != null) {
        database.ref(`users/${this.currentUserId}/daily_reports/${this.dailyReportId}`).update({
          date: this.date,
          title: this.title,
          content: this.content
        }).then(() => location.href = '/');
      } else {
        database.ref(`users/${this.currentUserId}/daily_reports`).push({
          date: this.date,
          title: this.title,
          content: this.content,
          createdAt: Date.now() // TODO: タイムスタンプをサーバ側で生成する
        });

        this.date = todayStr;
        this.title = '';
        this.content = '';
      }
    }
  },
  mounted: function() {
    const database = firebase.database();

    if(this.currentUserId != null && this.dailyReportId != null) {
      // TODO: DailyReportDetailとまとめる
      database.ref(`users/${this.currentUserId}/daily_reports/${this.dailyReportId}`).once('value', r => {
        const dailyReport = r.val();
        if(dailyReport == null) {
          return; // TODO: 日報が見つからなかった時の処理
        }

        this.date = dailyReport.date;
        this.title = dailyReport.title;
        this.content = dailyReport.content;
      });
    } else {
      this.date = todayStr;
    }
  }
}
