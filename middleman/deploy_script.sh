bundle exec middleman build

for word in $(cat last_build_files_and_dirs.txt); do 
  rm -r ../$word  
done

ls build > last_build_files_and_dirs.txt

mv build/* ../

rmdir build
