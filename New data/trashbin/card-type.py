import pandas as pd

filtered_df = pd.read_csv('filtered_transactions.csv')

# Read the CSV file containing the medium customer data
medium_df = pd.read_csv('Small.csv')

# Check the columns in Medium.csv before filtering
print("Medium.csv Columns:", medium_df.columns)

# Filter to keep only the CUSTOMER_ID column from medium_df
medium_df = medium_df[['CUSTOMER_ID']]

# Filter the transactions to retain only the customer IDs present in Medium.csv
filtered_df = filtered_df[filtered_df['CUSTOMER_ID'].isin(medium_df['CUSTOMER_ID'])]

# Display the result
print(filtered_df.head())

df_cleaned = filtered_df.drop_duplicates(subset=["CUSTOMER_ID", "CARD_TYPE"])

# Display the cleaned data
print(df_cleaned)

# Optionally, save to a new CSV
df_cleaned.to_csv('CC_Small.csv', index=False)
