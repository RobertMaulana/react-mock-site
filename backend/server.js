const app = require('express')(),
      socket = require('socket.io'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors = require('cors');

const category = require('./routes/article-category');
const post = require('./routes/posts');
const user = require('./routes/users');

mongoose.connect('mongodb://localhost/robertmaulanablog');

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const { articleCategory } = category;
const { posts } = post;
const { users } = user

app.use('/category', articleCategory);
app.use('/posts', posts);
app.use('/user', users);

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('server running!');
})

const io = socket(server);

io.on('connection', function (socket) {
  console.log('connect to socket');
});
