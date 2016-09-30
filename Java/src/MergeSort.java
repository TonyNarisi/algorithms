import java.util.ArrayList;
import java.util.Arrays;

public class MergeSort {

	public static int[] mergeSort(int[] arr) {
		if (arr.length <= 1) {
			return arr;
		} else {
			int midpoint = arr.length/2;
			int[] leftArr = mergeSort(Arrays.copyOfRange(arr, 0, midpoint));
			int[] rightArr = mergeSort(Arrays.copyOfRange(arr, midpoint, arr.length));
			return merge(leftArr, rightArr);
		}
	}
	
	public static int[] merge(int[] leftArr, int[] rightArr) {
		int leftIndex = 0;
		int rightIndex = 0;
		ArrayList<Integer> mergedArray = new ArrayList<Integer>();
		
		while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
			if (leftArr[leftIndex] <= rightArr[rightIndex]) {
				mergedArray.add(leftArr[leftIndex]);
				leftIndex += 1;
			} else {
				mergedArray.add(rightArr[rightIndex]);
				rightIndex += 1;
			}
		}
		
		if (leftIndex < leftArr.length) {
			while (leftIndex < leftArr.length) {
				mergedArray.add(leftArr[leftIndex]);
				leftIndex += 1;
			}
		} else if (rightIndex < rightArr.length) {
			while (rightIndex < rightArr.length) {
				mergedArray.add(rightArr[rightIndex]);
				rightIndex += 1;
			}
		}
		
		int[] mergedIntArray = mergedArray.stream().mapToInt(i -> i).toArray();
		return mergedIntArray;
	}
	
	public static void main(String[] args) {
		int[] arr = {5, 3, 7, 98, 2, 43, 2, 5, 6};
		System.out.println("Unsorted array:");
		System.out.println(Arrays.toString(arr));
		System.out.println("Sorted array:");
		System.out.println(Arrays.toString(mergeSort(arr)));
	}

}
