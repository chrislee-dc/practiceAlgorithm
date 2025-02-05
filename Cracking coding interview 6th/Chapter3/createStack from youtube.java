class FullStackException extends Exception {}

class MultiStacks {
  private class StackInfo {
    public int start, dataSize, stackSize;
    public StackInfo(int start, int StackSize) {
      this.start = start;
      this.stackSize = stackSize;
      this.dataSize = 0;
    }

    public boolean isWithinStack(int index) {
      // ?? values.length? where is coming from?
      if (index < 0 || index >= values.length) {
        return false;
      }
      int virtualIndex = index < start ? index + values.length : index;

      int end = start + stackSize;
      return start <= virtualIndex && virtualIndex < end;
    }

    public int getLastStackIndex() {
      return adjustIndex(start + stackSize - 1);
    }

    public int getLastDataIndex() {
      return adjustIndex(start + dataSize - 1);
    }

    public int getNewDataIndex() {
      return adjustIndex(getLastDataIndex() + 1);
    }

    public boolean isFull() {
      return dataSize == stackSize;
    }

    public boolean isEmpty() {
      return dataSize == 0;
    }
  }

  private StackInfo[] info;
  private int[] values;

  public MultiStacks(int numOfStacks, int defaultSize) {
    info = new StackInfo[numOfStacks];

    for(int i = 0; i < numOfStacks; i++) {
      info[i] = new StackInfo(defaultSize * i, defaultSize);
    }
    values = new int[numOfStacks + defaultSize]
  }
}

public class Test {
  public static void main(String[] args) {

  }
}