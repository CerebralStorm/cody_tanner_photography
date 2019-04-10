json.blogs @blogs do |blog|
  json.partial! 'blog', blog: blog
end