# Node.js

https://nodejs.org/en/

## process.exit()

https://nodejs.org/api/process.html#process_process_exit_code

## fs (File System)

https://nodejs.org/api/fs.html

### fs.appendFile

https://nodejs.org/api/fs.html#fs_fs_appendfile_path_data_options_callback

### fs.rename

https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback

### fs.unlink

https://nodejs.org/api/fs.html#fs_fs_unlink_path_callback

# Exercise

Add support for an additional operation, "med" to the switch (today’s index.js) 
which calculates the [Median](https://en.wikipedia.org/wiki/Median) number in the set.
To calculate the median you will have to follow the steps below:
1. Sort the set of numbers
2. Get the index of the middle number by dividing the last index of the set by two: \<last index> / 2
3. If the resulting index is a whole number (e.g. 7) then the median of the set is the value in that index.
4. Otherwise (if num is a fraction, e.g. 7.5) then the median is calculated
by adding the two values in the indexes around it (for 7.5 it would be 7, and 8 ) and dividing them by two.