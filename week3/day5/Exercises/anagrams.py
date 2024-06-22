from mini_project_anagram_checker import AnagramChecker

def main():
    anagram_checker = AnagramChecker()

    print("Welcome to anagram checker! Would you like to exit or check your word?\n")

    while True:
        user_input = input("Enter the word or 'exit'\n").strip()

        if user_input.lower() == "exit":
            print("Goodbye!")
            break

        if not user_input.isalpha():
            print("Your input contains invalid characters or spaces. Please enter a single word without symbols or spaces.")
            continue

        user_word = user_input.upper()
        print(f"YOUR WORD: {user_word}")
        
        if anagram_checker.is_valid_word(user_word):
            print("this is a valid English word.")
        else:
            print("this is not a valid English word.")

        anagrams = anagram_checker.get_anagrams()
        if anagrams:
            print(f"Anagrams for your word: {','.join(anagrams)}")
        else:
            print("No anagrams found for your word")

if __name__ == "__main__":
    main()
