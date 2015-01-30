bundle exec middleman build

# Remove all files in directory except the .git... local_resources and build
mv build/* ../
rmdir build
