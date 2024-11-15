import pandas as pd

# Load the CSV file
file_path = 'filtered_transactions.csv'
df = pd.read_csv(file_path)

# Identify duplicate CUSTOMER_ID entries
duplicates_df = df[df.duplicated(subset='CUSTOMER_ID', keep=False)]

# Sort the duplicates by CUSTOMER_ID to group them together
duplicates_df = duplicates_df.sort_values(by='CUSTOMER_ID')

# Save the duplicates to a new CSV file
duplicates_df.to_csv('dups.csv', index=False)

# Print the number of duplicate CUSTOMER_ID entries
duplicate_count = duplicates_df['CUSTOMER_ID'].nunique()
print(f"Number of duplicate CUSTOMER_ID entries: {duplicate_count}")