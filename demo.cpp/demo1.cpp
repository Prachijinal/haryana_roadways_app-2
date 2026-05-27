#include <iostream>
#include <vector>
using namespace std;
/*int prod=1;
void f(int i,int arr[],int n){
  if (i>=n/2){
    return ;}
  swap(arr[i],arr[n-i-1]);
  f(i+1,arr,n);
}*/
int main()
{
  /*int arr[]={1,2,3,4,5};
  f(0,arr,5);
  for (int i = 0; i <5 ; i++)
{
    cout<<arr[i]<<" ";
  }

//-----------------------------------------------------------------------------------------------------------------------
string s="anagram";
string t="naagram";
if(s.length()!=t.length()){
  return false;
}
vector<int> v(26,0);
for(int i=0;i<s.length() ;i++){
  v[s[i]-'a']++;
  v[t[i]-'a']--;
}
for(int i=0;i<26;i++){
  if(v[i] != 0) {
    return false;
  }

}
return true;*/

  /*int arr[]={3,6,1,8,3,9};
  for(int i =0; i<6 ; i++){
    if(arr[i]>arr[i+1]){
      swap(arr[i],arr[i+1]);

    }
    else{continue;}
  }
  for(int i =0; i<6 ; i++){
    cout<<arr[i]<<endl;
  }*/
  vector<int>  nums={2,3,6,8,6,3};
  int val=2;
  int n = nums.size();
  int end = (n - 1);
  for (int i = 0; i < n; i++)
  {
    
    if (nums[i] == val)
    {
      swap(nums[i], nums[end]);
      nums.pop_back();
      end--;
      i--;
      
    }
  }
  cout<<nums.size()<<endl;;

  return 0;
}
