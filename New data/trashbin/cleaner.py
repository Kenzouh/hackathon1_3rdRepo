import pandas as pd

data = pd.read_csv('CC_Micro.csv')
df = pd.DataFrame(data)

# Remove duplicates based on CUSTOMER_ID, CC_ACCOUNT_ID, and MCC_CODE
df_cleaned = df.drop_duplicates(subset=["CUSTOMER_ID", "CARD_TYPE"])

# Display the cleaned data
print(df_cleaned)

# Optionally, save to a new CSV
df_cleaned.to_csv('CC_Micro.csv', index=False)
