# Create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.
# The Pagination class will accept 2 parameters:
# items (default: None): It will contain a list of contents to paginate.
# pageSize (default: 10): The amount of items to show in each page.
# So for example we could initialize our pagination like this:
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)
# The Pagination class will have a few methods:
# getVisibleItems() : returns a list of items visible depending on the pageSize
# So for example we could use this method like this:
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# You will have to implement various methods to go through the pages such as:
# prevPage()
# nextPage()
# firstPage()
# lastPage()
# goToPage(pageNum)
# Here’s a continuation of the example above using nextPage and lastPage:
# alphabetList = list("abcdefghijklmnopqrstuvwxyz")
# p = Pagination(alphabetList, 4)
# p.getVisibleItems() 
# # ["a", "b", "c", "d"]
# p.nextPage()
# p.getVisibleItems()
# # ["e", "f", "g", "h"]
# p.lastPage()
# p.getVisibleItems()
# # ["y", "z"]

# Notes
# The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
# The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage()
# Please set the p.totalPages and p.currentPage attributes to the appropriate number as there cannot be a page 0.
# If a page is outside of the totalPages attribute, then the goToPage method should go to the closest page to the number provided (e.g. there are only 5 total pages, but p.goToPage(10) is given: the p.currentPage should be set to 5; if 0 or a negative number is given, p.currentPage should be set to 1).

from typing import Optional
from math import ceil


class Pagination:
    def __init__(self, items: Optional[list], pageSize: int = 10) -> None:
         self.items = items
         self.pageSize = pageSize
         self.totalPages = ceil(len(items) / pageSize)  
         self.currentPage = 1

    def getVisibleItems(self) -> list:
        end_idx = self.currentPage * self.pageSize  # 2 * 4 -> 8
        start_idx = end_idx - self.pageSize  # 8 - 4 = 4
        return self.items[start_idx:end_idx]
    
    def prevPage(self):
        self.goToPage(self.currentPage - 1)

    def nextPage(self):
        self.goToPage(self.currentPage + 1)

    def firstPage(self):
        self.goToPage(1)

    def lastPage(self):
        self.goToPage(self.totalPages) 

    def goToPage(self, pageNum: int):
        if pageNum <= 0 or pageNum > self.totalPages:
            raise ValueError(
                "page_num isn't in the correct range of the available pages"
            )

def main():
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    p.goToPage(1)
    p.lastPage()
    current_items = p.getVisibleItems()
    print(current_items)

if __name__ == "__main__":
    main()
